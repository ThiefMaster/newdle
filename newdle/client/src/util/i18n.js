import {i18n} from '@lingui/core';
import {en as pluralsEN, fr as pluralsFR, es as pluralsES} from 'make-plural/plurals';
import {messages as messagesEN} from '../locales/en/messages';
import {messages as messagesES} from '../locales/es/messages';
import {messages as messagesFR} from '../locales/fr/messages';

i18n.loadLocaleData({
  en: {plurals: pluralsEN},
  fr: {plurals: pluralsFR},
  es: {plurals: pluralsES},
});
i18n.load({
  en: messagesEN,
  fr: messagesFR,
  es: messagesES,
});
i18n.activate(getInitialLanguage());

export function setLocale(locale) {
  localStorage.setItem('userLanguage', locale);
  i18n.activate(locale);
}

function getInitialLanguage() {
  if (window.location.hash !== '#i18n' && !localStorage.getItem('userLanguage')) {
    // since we do not have any complete translations, we always default to english for now
    return 'en';
  }
  return localStorage.getItem('userLanguage') || navigator.language.substring(0, 2);
}

export function getLanguageOptions() {
  return {en: 'English', fr: 'French', es: 'Spanish'};
}
