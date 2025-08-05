<template>
  <Teleport to="#app">
    <Toaster
      :position="content.position"
      :expand="content.expand"
      :duration="content.duration"
      :offset="content.offset"
      :richColors="content.richColors"
      :closeButton="content.closeButton"
      :theme="content.theme"
      :toastOptions="toastOptions"
    />
  </Teleport>
</template>

<script>
import { computed, watch, onMounted } from 'vue';
import { Toaster, toast } from 'vue-sonner';

export default {
  components: {
    Toaster
  },
  props: {
    content: {
      type: Object,
      required: true
    },
    uid: {
      type: String,
      required: true
    },
  },
  emits: ['trigger-event'],
  setup(props, { emit }) {
    // Editor state
    const isEditing = computed(() => {
      // eslint-disable-next-line no-unreachable
      return false;
    });

    // Toast options
    const toastOptions = computed(() => ({
      style: {
        fontSize: props.content?.fontSize || '14px',
        fontWeight: props.content?.fontWeight || 'normal',
        borderRadius: props.content?.borderRadius || '8px',
        backgroundColor: props.content?.backgroundColor || undefined,
        color: props.content?.textColor || undefined,
        border: props.content?.border || undefined,
      }
    }));

    // Internal variables for toast state
    const { value: lastToastId, setValue: setLastToastId } = wwLib.wwVariable.useComponentVariable({
      uid: props.uid,
      name: 'lastToastId',
      type: 'string',
      defaultValue: ''
    });

    const { value: lastToastType, setValue: setLastToastType } = wwLib.wwVariable.useComponentVariable({
      uid: props.uid,
      name: 'lastToastType',
      type: 'string',
      defaultValue: ''
    });

    const { value: lastToastMessage, setValue: setLastToastMessage } = wwLib.wwVariable.useComponentVariable({
      uid: props.uid,
      name: 'lastToastMessage',
      type: 'string',
      defaultValue: ''
    });

    // Show toast methods
    const showToast = (message, options = {}) => {
      if (isEditing.value) return;
      
      const id = options.id || Date.now().toString();
      const toastInstance = toast(message, {
        ...options,
        id
      });
      
      setLastToastId(id);
      setLastToastType('default');
      setLastToastMessage(message);
      
      emit('trigger-event', {
        name: 'toastShown',
        event: { id, type: 'default', message }
      });
      
      return toastInstance;
    };

    const showSuccessToast = (message, options = {}) => {
      if (isEditing.value) return;
      
      const id = options.id || Date.now().toString();
      const toastInstance = toast.success(message, {
        ...options,
        id
      });
      
      setLastToastId(id);
      setLastToastType('success');
      setLastToastMessage(message);
      
      emit('trigger-event', {
        name: 'toastShown',
        event: { id, type: 'success', message }
      });
      
      return toastInstance;
    };

    const showErrorToast = (message, options = {}) => {
      if (isEditing.value) return;
      
      const id = options.id || Date.now().toString();
      const toastInstance = toast.error(message, {
        ...options,
        id
      });
      
      setLastToastId(id);
      setLastToastType('error');
      setLastToastMessage(message);
      
      emit('trigger-event', {
        name: 'toastShown',
        event: { id, type: 'error', message }
      });
      
      return toastInstance;
    };

    const showInfoToast = (message, options = {}) => {
      if (isEditing.value) return;
      
      const id = options.id || Date.now().toString();
      const toastInstance = toast.info(message, {
        ...options,
        id
      });
      
      setLastToastId(id);
      setLastToastType('info');
      setLastToastMessage(message);
      
      emit('trigger-event', {
        name: 'toastShown',
        event: { id, type: 'info', message }
      });
      
      return toastInstance;
    };

    const showWarningToast = (message, options = {}) => {
      if (isEditing.value) return;
      
      const id = options.id || Date.now().toString();
      const toastInstance = toast.warning(message, {
        ...options,
        id
      });
      
      setLastToastId(id);
      setLastToastType('warning');
      setLastToastMessage(message);
      
      emit('trigger-event', {
        name: 'toastShown',
        event: { id, type: 'warning', message }
      });
      
      return toastInstance;
    };

    const showPromiseToast = async (promise, messages, options = {}) => {
      if (isEditing.value) return;
      
      const id = options.id || Date.now().toString();
      const toastInstance = toast.promise(promise, {
        loading: messages.loading || 'Loading...',
        success: messages.success || 'Success!',
        error: messages.error || 'Error!',
        ...options,
        id
      });
      
      setLastToastId(id);
      setLastToastType('promise');
      setLastToastMessage(messages.loading || 'Loading...');
      
      emit('trigger-event', {
        name: 'toastShown',
        event: { id, type: 'promise', message: messages.loading || 'Loading...' }
      });
      
      return toastInstance;
    };

    const dismissToast = (toastId) => {
      if (isEditing.value) return;
      
      const id = toastId || lastToastId.value;
      if (id) {
        toast.dismiss(id);
        emit('trigger-event', {
          name: 'toastDismissed',
          event: { id }
        });
      }
    };

    const dismissAllToasts = () => {
      if (isEditing.value) return;
      
      toast.dismiss();
      emit('trigger-event', {
        name: 'allToastsDismissed',
        event: {}
      });
    };

    // Show example toast on mount in editor
    onMounted(() => {
      if (isEditing.value && props.content?.showExampleInEditor) {
        setTimeout(() => {
          toast(props.content?.exampleMessage || 'This is an example toast notification', {
            description: 'This toast is only visible in the editor',
          });
        }, 500);
      }
    });

    // Watch for initialToast changes
    watch(() => props.content?.initialToast, (newVal) => {
      if (newVal && !isEditing.value) {
        showToast(newVal);
      }
    }, { immediate: true });

    return {
      toastOptions,
      showToast,
      showSuccessToast,
      showErrorToast,
      showInfoToast,
      showWarningToast,
      showPromiseToast,
      dismissToast,
      dismissAllToasts,
      lastToastId,
      lastToastType,
      lastToastMessage
    };
  }
};
</script>

<style lang="scss" scoped>
.toast-notification-container {
  display: none; // Hide the container as Toaster positions itself absolutely
}
</style>