export default {
  editor: {
    label: {
      en: 'Toast Notification',
      fr: 'Notification Toast'
    },
    icon: 'bell',
  },
  properties: {
    position: {
      label: { 
        en: 'Position',
        fr: 'Position'
      },
      type: 'TextSelect',
      section: 'settings',
      bindable: true,
      defaultValue: 'top-center',
      options: {
        options: [
          { value: 'top-left', label: 'Top Left' },
          { value: 'top-center', label: 'Top Center' },
          { value: 'top-right', label: 'Top Right' },
          { value: 'bottom-left', label: 'Bottom Left' },
          { value: 'bottom-center', label: 'Bottom Center' },
          { value: 'bottom-right', label: 'Bottom Right' }
        ]
      },
    },
    expand: {
      label: { 
        en: 'Expand',
        fr: 'Étendre'
      },
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      defaultValue: false,
    },
    duration: {
      label: { 
        en: 'Duration (ms)',
        fr: 'Durée (ms)'
      },
      type: 'Number',
      section: 'settings',
      bindable: true,
      defaultValue: 4000,
      options: {
        min: 1000,
        max: 20000,
        step: 500
      },
    },
    offset: {
      label: { 
        en: 'Offset (px)',
        fr: 'Décalage (px)'
      },
      type: 'Number',
      section: 'settings',
      bindable: true,
      defaultValue: 32,
      options: {
        min: 0,
        max: 100,
        step: 1
      },
    },
    richColors: {
      label: { 
        en: 'Rich Colors',
        fr: 'Couleurs riches'
      },
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      defaultValue: false,
    },
    closeButton: {
      label: { 
        en: 'Close Button',
        fr: 'Bouton de fermeture'
      },
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      defaultValue: true,
    },
    theme: {
      label: { 
        en: 'Theme',
        fr: 'Thème'
      },
      type: 'TextSelect',
      section: 'settings',
      bindable: true,
      defaultValue: 'light',
      options: {
        options: [
          { value: 'light', label: 'Light' },
          { value: 'dark', label: 'Dark' },
          { value: 'system', label: 'System' }
        ]
      },
    },
    initialToast: {
      label: { 
        en: 'Initial Toast',
        fr: 'Toast initial'
      },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: '',
    },
    showExampleInEditor: {
      label: { 
        en: 'Show Example in Editor',
        fr: 'Afficher un exemple dans l\'éditeur'
      },
      type: 'OnOff',
      section: 'settings',
      bindable: false,
      defaultValue: true,
    },
    exampleMessage: {
      label: { 
        en: 'Example Message',
        fr: 'Message d\'exemple'
      },
      type: 'Text',
      section: 'settings',
      bindable: false,
      defaultValue: 'This is an example toast notification',
      hidden: content => !content.showExampleInEditor,
    },
    // Style properties
    fontSize: {
      label: { 
        en: 'Font Size',
        fr: 'Taille de police'
      },
      type: 'Length',
      section: 'style',
      bindable: true,
      defaultValue: '14px',
    },
    fontWeight: {
      label: { 
        en: 'Font Weight',
        fr: 'Graisse de police'
      },
      type: 'TextSelect',
      section: 'style',
      bindable: true,
      defaultValue: 'normal',
      options: {
        options: [
          { value: 'normal', label: 'Normal' },
          { value: 'bold', label: 'Bold' },
          { value: '300', label: 'Light (300)' },
          { value: '400', label: 'Regular (400)' },
          { value: '500', label: 'Medium (500)' },
          { value: '600', label: 'Semi-Bold (600)' },
          { value: '700', label: 'Bold (700)' }
        ]
      },
    },
    borderRadius: {
      label: { 
        en: 'Border Radius',
        fr: 'Rayon de bordure'
      },
      type: 'Length',
      section: 'style',
      bindable: true,
      defaultValue: '8px',
    },
    backgroundColor: {
      label: { 
        en: 'Background Color',
        fr: 'Couleur d\'arrière-plan'
      },
      type: 'Color',
      section: 'style',
      bindable: true,
      defaultValue: null,
      options: {
        nullable: true
      },
    },
    textColor: {
      label: { 
        en: 'Text Color',
        fr: 'Couleur du texte'
      },
      type: 'Color',
      section: 'style',
      bindable: true,
      defaultValue: null,
      options: {
        nullable: true
      },
    },
    border: {
      label: { 
        en: 'Border',
        fr: 'Bordure'
      },
      type: 'Text',
      section: 'style',
      bindable: true,
      defaultValue: null,
    }
  },
  triggerEvents: [
    {
      name: 'toastShown',
      label: { 
        en: 'On toast shown',
        fr: 'Toast affiché'
      },
      event: { 
        id: '',
        type: '',
        message: ''
      }
    },
    {
      name: 'toastDismissed',
      label: { 
        en: 'On toast dismissed',
        fr: 'Toast fermé'
      },
      event: { 
        id: ''
      }
    },
    {
      name: 'allToastsDismissed',
      label: { 
        en: 'On all toasts dismissed',
        fr: 'Tous les toasts fermés'
      },
      event: {}
    }
  ],
  actions: [
    {
      action: 'showToast',
      label: { 
        en: 'Show toast',
        fr: 'Afficher un toast'
      },
      args: [
        {
          name: 'message',
          type: 'string',
          label: { 
            en: 'Message',
            fr: 'Message'
          }
        },
        {
          name: 'options',
          type: 'object',
          label: { 
            en: 'Options (optional)',
            fr: 'Options (optionnel)'
          }
        }
      ]
    },
    {
      action: 'showSuccessToast',
      label: { 
        en: 'Show success toast',
        fr: 'Afficher un toast de succès'
      },
      args: [
        {
          name: 'message',
          type: 'string',
          label: { 
            en: 'Message',
            fr: 'Message'
          }
        },
        {
          name: 'options',
          type: 'object',
          label: { 
            en: 'Options (optional)',
            fr: 'Options (optionnel)'
          }
        }
      ]
    },
    {
      action: 'showErrorToast',
      label: { 
        en: 'Show error toast',
        fr: 'Afficher un toast d\'erreur'
      },
      args: [
        {
          name: 'message',
          type: 'string',
          label: { 
            en: 'Message',
            fr: 'Message'
          }
        },
        {
          name: 'options',
          type: 'object',
          label: { 
            en: 'Options (optional)',
            fr: 'Options (optionnel)'
          }
        }
      ]
    },
    {
      action: 'showInfoToast',
      label: { 
        en: 'Show info toast',
        fr: 'Afficher un toast d\'information'
      },
      args: [
        {
          name: 'message',
          type: 'string',
          label: { 
            en: 'Message',
            fr: 'Message'
          }
        },
        {
          name: 'options',
          type: 'object',
          label: { 
            en: 'Options (optional)',
            fr: 'Options (optionnel)'
          }
        }
      ]
    },
    {
      action: 'showWarningToast',
      label: { 
        en: 'Show warning toast',
        fr: 'Afficher un toast d\'avertissement'
      },
      args: [
        {
          name: 'message',
          type: 'string',
          label: { 
            en: 'Message',
            fr: 'Message'
          }
        },
        {
          name: 'options',
          type: 'object',
          label: { 
            en: 'Options (optional)',
            fr: 'Options (optionnel)'
          }
        }
      ]
    },
    {
      action: 'showPromiseToast',
      label: { 
        en: 'Show promise toast',
        fr: 'Afficher un toast de promesse'
      },
      args: [
        {
          name: 'promise',
          type: 'object',
          label: { 
            en: 'Promise',
            fr: 'Promesse'
          }
        },
        {
          name: 'messages',
          type: 'object',
          label: { 
            en: 'Messages',
            fr: 'Messages'
          }
        },
        {
          name: 'options',
          type: 'object',
          label: { 
            en: 'Options (optional)',
            fr: 'Options (optionnel)'
          }
        }
      ]
    },
    {
      action: 'dismissToast',
      label: { 
        en: 'Dismiss toast',
        fr: 'Fermer un toast'
      },
      args: [
        {
          name: 'id',
          type: 'string',
          label: { 
            en: 'Toast ID (optional)',
            fr: 'ID du toast (optionnel)'
          }
        }
      ]
    },
    {
      action: 'dismissAllToasts',
      label: { 
        en: 'Dismiss all toasts',
        fr: 'Fermer tous les toasts'
      }
    }
  ]
};