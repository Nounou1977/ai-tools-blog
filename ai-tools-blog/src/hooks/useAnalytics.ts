import { supabase } from '@/lib/supabase';

interface AnalyticsEvent {
  event_type: string;
  client_id?: string;
  commande_id?: string;
  data?: Record<string, any>;
}

export const useAnalytics = () => {
  const trackEvent = async (event: AnalyticsEvent) => {
    try {
      const { error } = await supabase
        .from('analytics')
        .insert({
          event_type: event.event_type,
          client_id: event.client_id || null,
          commande_id: event.commande_id || null,
          data_json: event.data ? JSON.stringify(event.data) : null,
        });

      if (error) {
        console.error('Erreur tracking analytics:', error);
      }
    } catch (err) {
      console.error('Erreur tracking analytics:', err);
    }
  };

  const trackPageView = (page: string) => {
    trackEvent({
      event_type: 'page_view',
      data: { page, timestamp: new Date().toISOString() },
    });
  };

  const trackButtonClick = (button: string, section?: string) => {
    trackEvent({
      event_type: 'button_click',
      data: { button, section, timestamp: new Date().toISOString() },
    });
  };

  const trackCheckoutStarted = (clientId?: string) => {
    trackEvent({
      event_type: 'checkout_started',
      client_id: clientId,
      data: { timestamp: new Date().toISOString() },
    });
  };

  const trackPurchaseCompleted = (commandeId: string, clientId: string, montant: number) => {
    trackEvent({
      event_type: 'purchase_completed',
      client_id: clientId,
      commande_id: commandeId,
      data: { montant, timestamp: new Date().toISOString() },
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackButtonClick,
    trackCheckoutStarted,
    trackPurchaseCompleted,
  };
};
