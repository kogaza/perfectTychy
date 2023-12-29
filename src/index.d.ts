export declare global {
  interface Window {
    hbspt: {
      forms: {
        create: ({
          region,
          portalId,
          formId,
          target,
        }: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
          onFormSubmit?: () => void;
          onFormSubmitted?: () => void;
        }) => void;
      };
    };
  }
}
