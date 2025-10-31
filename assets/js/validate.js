/* /assets/js/validate.js */
/* Form validation using Constraint Validation API */

(function() {
  'use strict';

  // Wait for DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    const form = document.getElementById('contact-form');
    if (form) {
      initFormValidation(form);
    }
  }

  /* ============================================
     FORM VALIDATION
     ============================================ */
  function initFormValidation(form) {
    const inputs = form.querySelectorAll('input, textarea, select');
    const messagesContainer = document.getElementById('form-messages');

    // Custom validation messages (Arabic/English)
    const validationMessages = {
      ar: {
        valueMissing: 'هذا الحقل مطلوب',
        typeMismatch: 'الرجاء إدخال قيمة صحيحة',
        tooShort: 'القيمة قصيرة جداً',
        emailInvalid: 'الرجاء إدخال بريد إلكتروني صحيح',
        submitError: 'حدث خطأ. الرجاء المحاولة مرة أخرى.',
        submitSuccess: 'تم إرسال رسالتك بنجاح! سنرد عليك قريباً.'
      },
      en: {
        valueMissing: 'This field is required',
        typeMismatch: 'Please enter a valid value',
        tooShort: 'Value is too short',
        emailInvalid: 'Please enter a valid email',
        submitError: 'An error occurred. Please try again.',
        submitSuccess: 'Your message was sent successfully! We\'ll get back to you soon.'
      }
    };

    // Detect language
    const lang = document.documentElement.lang || 'ar';
    const messages = validationMessages[lang] || validationMessages.ar;

    // Real-time validation on blur
    inputs.forEach(function(input) {
      input.addEventListener('blur', function() {
        validateField(input, messages);
      });

      // Clear error on input
      input.addEventListener('input', function() {
        const formGroup = input.closest('.form-group');
        if (formGroup && formGroup.classList.contains('has-error')) {
          formGroup.classList.remove('has-error');
          const errorSpan = formGroup.querySelector('.form-error');
          if (errorSpan) {
            errorSpan.textContent = '';
          }
        }
      });
    });

    // Form submission
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      let isValid = true;

      // Validate all fields
      inputs.forEach(function(input) {
        if (!validateField(input, messages)) {
          isValid = false;
        }
      });

      if (isValid) {
        submitForm(form, messages, messagesContainer);
      } else {
        // Focus first error
        const firstError = form.querySelector('.has-error input, .has-error textarea, .has-error select');
        if (firstError) {
          firstError.focus();
        }

        // Announce errors to screen readers
        showMessage(messagesContainer, messages.submitError, 'error');
      }
    });
  }

  /* ============================================
     VALIDATE INDIVIDUAL FIELD
     ============================================ */
  function validateField(field, messages) {
    const formGroup = field.closest('.form-group');
    if (!formGroup) return true;

    const errorSpan = formGroup.querySelector('.form-error');
    if (!errorSpan) return true;

    let errorMessage = '';

    // Check validity using Constraint Validation API
    if (!field.validity.valid) {
      if (field.validity.valueMissing) {
        errorMessage = messages.valueMissing;
      } else if (field.validity.typeMismatch) {
        if (field.type === 'email') {
          errorMessage = messages.emailInvalid;
        } else {
          errorMessage = messages.typeMismatch;
        }
      } else if (field.validity.tooShort) {
        errorMessage = messages.tooShort;
      }
    }

    // Custom validation for message length
    if (field.name === 'message' && field.value.trim().length < 10 && field.value.length > 0) {
      errorMessage = messages.tooShort;
    }

    // Apply error state
    if (errorMessage) {
      formGroup.classList.add('has-error');
      errorSpan.textContent = errorMessage;
      return false;
    } else {
      formGroup.classList.remove('has-error');
      errorSpan.textContent = '';
      return true;
    }
  }

  /* ============================================
     SUBMIT FORM
     ============================================ */
  function submitForm(form, messages, messagesContainer) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = document.documentElement.lang === 'ar' ? 'جاري الإرسال...' : 'Sending...';

    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // FORM_ENDPOINT - Replace with actual endpoint or leave as # for demo
    const FORM_ENDPOINT = '#';

    // Simulate submission (replace with actual fetch to backend)
    setTimeout(function() {
      console.log('Form data:', data);

      // Show success message
      showMessage(messagesContainer, messages.submitSuccess, 'success');

      // Reset form
      form.reset();

      // Re-enable button
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;

      // In production, use fetch:
      /*
      fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(function(response) {
        if (!response.ok) throw new Error('Network error');
        return response.json();
      })
      .then(function() {
        showMessage(messagesContainer, messages.submitSuccess, 'success');
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      })
      .catch(function(error) {
        console.error(error);
        showMessage(messagesContainer, messages.submitError, 'error');
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      });
      */
    }, 1500);
  }

  /* ============================================
     SHOW MESSAGE
     ============================================ */
  function showMessage(container, message, type) {
    if (!container) return;

    const alertClass = type === 'success' ? 'alert-success' : 'alert-error';

    container.innerHTML = '<div class="alert ' + alertClass + '" role="alert">' + message + '</div>';

    // Auto-hide after 5 seconds
    setTimeout(function() {
      container.innerHTML = '';
    }, 5000);

    // Scroll to message
    container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

})();
