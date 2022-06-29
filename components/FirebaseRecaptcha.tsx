import { useEffect, useState } from "react";
import { getAuth, RecaptchaVerifier } from "firebase/auth";

// interface FirebaseRecaptchaProps {
//   instructionMessage: any;
//   onVerificationComplete: any;
// }
/**
 * Props
 {
  instructionMessage,
  onVerificationComplete,
}: FirebaseRecaptchaProps
 */

export const FirebaseRecaptcha = () => {
  const [isCaptchaLoading, setCaptchaLoading] = useState(false);
  //   const [verificationErrored, setVerificationErrored] = useState(false);

  let verifier: any = null;
  useEffect(() => {
    console.log("Initializing captcha");

    verifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: function (response: any) {
          console.log("verification success");
          setCaptchaLoading(false);
          //   onVerificationComplete(CaptchaVerificationStatus.SUCCESS);
        },
      },
      getAuth()
    );
  }, []);

  const onStartClick = async () => {
    if (verifier) {
      try {
        setCaptchaLoading(true);
        console.log("About to verify");
        const res = await verifier.verify();
      } catch (e) {
        setCaptchaLoading(false);
        console.error(e);
        // onVerificationComplete(CaptchaVerificationStatus.FAIL);
      }
    }
  };

  // <Button variant="contained" color="primary" id={recaptchaButtonId} onClick={()=>onStartClick()} className={`${classes.actionButton} ${classes.bottomMargin}`}>
  //   Start
  // </Button>

  return (
    <>
      <div id="recaptcha-container"></div>
      {/* <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
        {instructionMessage
          ? instructionMessage
          : getStrings().message_start_page}
      </Typography> */}
      <button onClick={() => onStartClick()}>Start</button>
      {isCaptchaLoading ? <h1>loading</h1> : <h1>finished loading</h1>}
    </>
  );
};
