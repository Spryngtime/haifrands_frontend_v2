'use client'

import React, {useCallback, useState} from 'react';
import { Form, Modal } from 'antd';
import NiceModal, { useModal, antdModal } from '@ebay/nice-modal-react';
import SendOTPForm from "@/components/ui/SendOTPForm";
import VerifyOTPForm from "@/components/ui/VerifyOTPForm";
import {StytchProvider} from "@stytch/nextjs";
import {createStytchUIClient} from "@stytch/nextjs/ui";
import {saveNewuser} from "@/components/utils/backendAPIHelper"

const stytchOptions = {
    cookieOptions: {
        availableToSubdomains: true,
        domain: ".usephortal.com",
    }}

const stytch = createStytchUIClient(process.env.NEXT_PUBLIC_STYTCH_PUBLIC || "", stytchOptions);


// @ts-ignore
export default NiceModal.create(({ user }) => {
    const modal = useModal();
    const [form] = Form.useForm();
    const [title, setTitle] = useState('')
    const [successfullyLoggedIn, setSuccessfullyLoggedIn] = useState(false)
    const [successDescription, setSuccessDescription] = useState('')

    const [otpSent, setOTPSent] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [methodId, setMethodId] = useState('');

    const meta = {
        initialValues: user,
        fields: [
            { key: 'name', label: 'Name', required: true },
            { key: 'job', label: 'Job Title', required: true },
        ],
    };

    const closeOnSuccess = () => {
        saveNewuser()
        let secondsToGo = 3;
        console.log("Success!")
        setSuccessfullyLoggedIn(true);
        setTitle("Success!")

        const timer = setInterval(() => {
            secondsToGo -= 1;
            setSuccessDescription(`Success! You'll be redirected in ${secondsToGo} seconds.`)
        }, 1000);

        setTimeout(() => {
            clearInterval(timer);
            modal.hide();
            window.location.href = 'https://app.usephortal.com/onboarding-01'; // Redirects to the specified
        }, secondsToGo * 1000);
    };

    const handleSubmit = useCallback(() => {
        form.validateFields().then(() => {
            const newUser = { ...form.getFieldsValue() };
            // In real case, you may call API to create user or update user
            if (!user) {
                newUser.id = String(Date.now());
            } else {
                newUser.id = user.id;
            }
            modal.resolve(newUser);
            modal.hide();
        });
    }, [modal, user, form]);
    return (
        <Modal
            {...antdModal(modal)}
            title={successDescription}
            // okText={user ? 'Update' : 'Create'}
            onOk={handleSubmit}
            footer={null}
        >
            <StytchProvider stytch={stytch}>
                {!otpSent ? (
                    <SendOTPForm
                        phoneNumber={phoneNumber}
                        setMethodId={setMethodId}
                        setOTPSent={setOTPSent}
                        setPhoneNumber={setPhoneNumber}
                        description={null}
                    />
                ) : (
                    <VerifyOTPForm methodId={methodId} phoneNumber={phoneNumber} closeOnSuccess={closeOnSuccess}/>
                )}
            </StytchProvider>
        </Modal>
    );
});