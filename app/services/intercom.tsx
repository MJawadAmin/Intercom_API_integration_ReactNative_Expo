// app/services/intercom.tsx
import Intercom, { Visibility } from '@intercom/intercom-react-native';

/**
 * Logs in an identified user with Intercom.
 * @param userId - The unique identifier for the user.
 * @param email - The user's email address.
 */
export const loginIdentifiedUser = async (userId: string, email: string) => {
  try {
    await Intercom.loginUserWithUserAttributes({ userId, email });
  } catch (error) {
    console.error('Error logging in identified user:', error);
  }
};

/**
 * Logs in an unidentified user with Intercom.
 */
export const loginUnidentifiedUser = async () => {
  try {
    await Intercom.loginUnidentifiedUser();
  } catch (error) {
    console.error('Error logging in unidentified user:', error);
  }
};

/**
 * Logs out the current user from Intercom.
 */
export const logoutUser = async () => {
  try {
    await Intercom.logout();
  } catch (error) {
    console.error('Error logging out user:', error);
  }
};

/**
 * Displays the Intercom message composer with a pre-filled message.
 * @param message - The message to pre-fill in the composer.
 */
export const showMessageComposer = async (message: string) => {
  try {
    await Intercom.presentMessageComposer(message);
  } catch (error) {
    console.error('Error presenting message composer:', error);
  }
};

/**
 * Sets the visibility of the Intercom launcher.
 * @param visible - A boolean indicating whether the launcher should be visible.
 */
export const setLauncherVisibility = async (visible: boolean) => {
  try {
    await Intercom.setLauncherVisibility(visible ? Visibility.VISIBLE : Visibility.GONE);
  } catch (error) {
    console.error('Error setting launcher visibility:', error);
  }
};

/**
 * Initializes Intercom. Typically handled automatically, but included for completeness.
 */
export const initializeIntercom = async () => {
  try {
    // Initialization logic if required
    // For most setups, Intercom initializes automatically
    console.log('Intercom initialized');
  } catch (error) {
    console.error('Error initializing Intercom:', error);
  }
};

/**
 * Resets Intercom by logging out the current user.
 */
export const resetIntercom = async () => {
  try {
    await Intercom.logout();
  } catch (error) {
    console.error('Error resetting Intercom:', error);
  }
};

/**
 * Displays the Intercom messenger.
 */
export const showIntercom = async () => {
    try {
      // Checking if the method exists before calling
      if (typeof (Intercom as any).presentMessenger === 'function') {
        await (Intercom as any).presentMessenger();
      } else {
        console.warn('presentMessenger method is not available.');
      }
    } catch (error) {
      console.error('Error presenting Intercom messenger:', error);
    }
  };
  
  

/**
 * Displays the Intercom message composer with a pre-filled message.
 * @param message - The message to pre-fill in the composer.
 */
export const displayMessageComposer = async (message: string) => {
  try {
    await Intercom.presentMessageComposer(message);
  } catch (error) {
    console.error('Error displaying message composer:', error);
  }
};
