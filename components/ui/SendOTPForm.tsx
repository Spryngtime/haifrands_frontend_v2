import React, {useEffect} from 'react';
import {useStytch, useStytchUser} from '@stytch/nextjs';

type Props = {
    phoneNumber: string;
    setMethodId: (methodId: string) => void;
    setOTPSent: (submitted: boolean) => void;
    setPhoneNumber: (phoneNumber: string) => void;

    description: string | null;
};

const SendOTPForm = (props: Props): JSX.Element => {
    const stytchClient = useStytch();
    const { phoneNumber, setMethodId, setOTPSent, setPhoneNumber, description } = props;
    const [isDisabled, setIsDisabled] = React.useState(true);

// The useStytchUser hook will return the existing Stytch User object if one exists
    const { user } = useStytchUser()

    const isValidNumber = (phoneNumberValue: string) => {
        // Regex validates phone numbers in (xxx)xxx-xxxx, xxx-xxx-xxxx, xxxxxxxxxx, and xxx.xxx.xxxx format
        const regex = /^[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/g;
        if (phoneNumberValue.match(regex)) {
            return true;
        }
        return false;
    };

    const onPhoneNumberChange = (e: React.ChangeEvent<{ value: string }>) => {
        setPhoneNumber(e.target.value);
        if (isValidNumber(e.target.value)) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isValidNumber(phoneNumber)) {
            const { method_id } = await stytchClient.otps.sms.loginOrCreate('+1' + phoneNumber);
            setMethodId(method_id);
            setOTPSent(true);
        }
    };

    return (
        <div>
            <h2>Enter phone number</h2>
            <p>{description == null ? ("The first 1000 people on the waitlist get free access") : (description)}</p>
            <form onSubmit={onSubmit}>
                <div style={styles.telInput}>
                    <input style={styles.flag} name="intlCode" type="text" value="+1" readOnly />
                    <input
                        style={styles.phoneNumber}
                        placeholder="(123) 456-7890"
                        value={phoneNumber}
                        onChange={onPhoneNumberChange}
                        type="tel"
                    />
                </div>
                <p style={styles.smsDisclaimer}>
                    By continuing, you consent to receive an SMS for verification. You also consent to get updates, like waitlist updates or image generations. Message and data rates may apply.
                </p>
                <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 full-width" disabled={isDisabled} id="button" type="submit">
                    Continue
                </button>
            </form>
        </div>
    );
};

const styles: Record<string, React.CSSProperties> = {
    telInput: {
        display: 'flex',
        marginTop: '20px',
        whiteSpace: 'nowrap',
    },
    phoneNumber: {
        borderLeft: 'none',
        borderRadius: '0 3px 3px 0',
        paddingLeft: '0',
        flexGrow: '1',
        fontSize: '18px',
        width: 'calc(100%)',
    },
    smsDisclaimer: {
        color: '#5c727d',
        fontSize: '14px',
        lineHeight: '20px',
        marginBottom: '16px',
        marginTop: '24px',
    },
    flag: {
        background: "url('/stars-and-stripes.png') no-repeat scroll 8px 16px",
        borderRight: 'none',
        borderRadius: '3px 0 0 3px',
        width: '80px',
        paddingLeft: '48px',
    },
};

export default SendOTPForm;