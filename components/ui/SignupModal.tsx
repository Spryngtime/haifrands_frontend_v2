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
    const [otpSent, setOTPSent] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [methodId, setMethodId] = useState('');

    const [title, setTitle] = useState('')
    const [successfullyLoggedIn, setSuccessfullyLoggedIn] = useState(false)
    const [successDescription, setSuccessDescription] = useState('')

    const meta = {
        initialValues: user,
        fields: [
            { key: 'name', label: 'Name', required: true },
            { key: 'job', label: 'Job Title', required: true },
        ],
    };

    const closeOnSuccess = () => {
        saveNewuser()
        let secondsToGo = 5;
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
            // okText={successfullyLoggedIn ? successDescription : ''}
            onOk={handleSubmit}
            footer={null}
        >
            <StytchProvider stytch={stytch}>
                {successfullyLoggedIn ? (<p></p>) :
                    (!otpSent ? (
                        <SendOTPForm
                            phoneNumber={phoneNumber}
                            setMethodId={setMethodId}
                            setOTPSent={setOTPSent}
                            setPhoneNumber={setPhoneNumber}
                            description={"Sign up to continue generating images!"}
                        />
                    ) : (
                        <VerifyOTPForm methodId={methodId} phoneNumber={phoneNumber} closeOnSuccess={closeOnSuccess}/>
                    ))
                }
                {}
            </StytchProvider>
        </Modal>
    );
});