
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Google Analytics Tracking ID
const GA_TRACKING_ID = 'G-T3W2YYB7HN';

// Initialize Google Analytics
export const initializeGA = () => {
  // Check if user has consented to analytics cookies
  const cookieConsent = localStorage.getItem('cookieConsent');
  if (!cookieConsent) return;

  const consent = JSON.parse(cookieConsent);
  if (!consent.analytics) return;

  // Initialize dataLayer if it doesn't exist
  window.dataLayer = window.dataLayer || [];
  
  // Define gtag function
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };

  // Initialize with current date
  window.gtag('js', new Date());

  // Configure GA with the tracking ID
  window.gtag('config', GA_TRACKING_ID, {
    anonymize_ip: true, // GDPR compliance
    cookie_flags: 'secure;samesite=strict'
  });

  console.log('Google Analytics initialized');
};

// Load GA script dynamically
export const loadGAScript = () => {
  // Check if script is already loaded
  if (document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) {
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  
  script.onload = () => {
    initializeGA();
  };

  document.head.appendChild(script);
};

// Track page views
export const trackPageView = (url: string, title?: string) => {
  const cookieConsent = localStorage.getItem('cookieConsent');
  if (!cookieConsent) return;

  const consent = JSON.parse(cookieConsent);
  if (!consent.analytics || !window.gtag) return;

  window.gtag('config', GA_TRACKING_ID, {
    page_title: title,
    page_location: url,
  });
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  const cookieConsent = localStorage.getItem('cookieConsent');
  if (!cookieConsent) return;

  const consent = JSON.parse(cookieConsent);
  if (!consent.analytics || !window.gtag) return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Disable Analytics (for cookie rejection)
export const disableGA = () => {
  if (window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': 'denied'
    });
  }
};

// Enable Analytics (for cookie acceptance)
export const enableGA = () => {
  if (window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
  }
  initializeGA();
};
