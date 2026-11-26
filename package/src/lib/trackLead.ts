export type LeadEventName = "webinar_registration" | "contact_form_submit" | "generate_lead";

type TrackLeadInput = {
  eventName: LeadEventName;
  formName: string;
  leadSource: string;
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Fires one dataLayer event and, when Meta Pixel is present, one Lead event.
 * GTM container GTM-TQTBK5CG must listen for these custom events and forward
 * them to GA4 as generate_lead (and to Google Ads, if a conversion is wanted).
 * The direct G-QMSV3WP8T5 tag stays removed; GA4 should be configured inside GTM.
 */
export function trackLeadConversion({ eventName, formName, leadSource }: TrackLeadInput): void {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ga4_event_name: "generate_lead",
    lead_type: eventName,
    form_name: formName,
    lead_source: leadSource,
  });

  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead", {
      content_name: formName,
      content_category: leadSource,
    });
  }
}
