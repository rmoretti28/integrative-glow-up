CREATE TABLE public.whatsapp_clicks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.whatsapp_clicks TO anon, authenticated;
GRANT ALL ON public.whatsapp_clicks TO service_role;
ALTER TABLE public.whatsapp_clicks ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can record a click" ON public.whatsapp_clicks
  FOR INSERT TO anon, authenticated WITH CHECK (char_length(page) <= 200);