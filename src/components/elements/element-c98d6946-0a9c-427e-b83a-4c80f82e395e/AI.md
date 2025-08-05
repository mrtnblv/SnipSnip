---
name: toast-notification
description: A customizable toast notification system powered by Vue Sonner, offering various toast types and styling options.
keywords: toast, notification, alert, message, vue-sonner, popup
---

#### Toast Notification

***Purpose:***
Provides a flexible toast notification system that allows displaying various types of notifications (success, error, info, warning) with customizable appearance and positioning.

***Features:***
- Multiple toast types: default, success, error, info, warning, and promise
- Customizable positioning (top/bottom, left/center/right)
- Adjustable duration, colors, and styling
- Rich colors option for more vibrant notifications
- System/light/dark theme support
- Close button toggle
- Promise toast support for async operations

***Properties:***
- position: 'top-left'|'top-center'|'top-right'|'bottom-left'|'bottom-center'|'bottom-right' - Controls where toasts appear on screen
- expand: boolean - When true, toasts expand to fill available width
- duration: number - Time in milliseconds before toast automatically disappears
- offset: number - Distance in pixels from the edge of the viewport
- richColors: boolean - Enables more saturated colors for toast types
- closeButton: boolean - Shows/hides the close button on toasts
- theme: 'light'|'dark'|'system' - Visual theme for toast notifications
- initialToast: string - Optional message to show when component first loads
- fontSize: string - Font size for toast text (e.g., "14px")
- fontWeight: string - Font weight for toast text (e.g., "normal", "bold")
- borderRadius: string - Controls roundness of toast corners (e.g., "8px")
- backgroundColor: string|null - Custom background color for toasts
- textColor: string|null - Custom text color for toasts
- border: string|null - Custom border style for toasts

***Events:***
- toastShown: Triggered when a toast is displayed. Payload: { id, type, message }
- toastDismissed: Triggered when a toast is dismissed. Payload: { id }
- allToastsDismissed: Triggered when all toasts are dismissed. No payload

***Exposed Actions:***
- `showToast`: Displays a default toast. Args: message (string), options (object)
- `showSuccessToast`: Displays a success toast. Args: message (string), options (object)
- `showErrorToast`: Displays an error toast. Args: message (string), options (object)
- `showInfoToast`: Displays an info toast. Args: message (string), options (object)
- `showWarningToast`: Displays a warning toast. Args: message (string), options (object)
- `showPromiseToast`: Displays a toast for async operations. Args: promise (object), messages (object), options (object)
- `dismissToast`: Dismisses a specific toast. Args: id (string, optional)
- `dismissAllToasts`: Dismisses all active toasts

***Exposed Variables:***
- lastToastId: ID of the most recently shown toast (path: variables['current_element_uid-lastToastId'])
- lastToastType: Type of the most recently shown toast (path: variables['current_element_uid-lastToastType'])
- lastToastMessage: Message of the most recently shown toast (path: variables['current_element_uid-lastToastMessage'])

***Notes:***
- The component is invisible in the editor as it only renders when toasts are triggered
- For promise toasts, provide an object with loading, success, and error messages
- Toast options can include description, duration, and other vue-sonner supported properties
- When using in workflows, you can trigger toasts through the component's actions