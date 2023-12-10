'use client'

import React, {useCallback, useState} from 'react';
import { Form, Modal } from 'antd';
import NiceModal, { useModal, antdModal } from '@ebay/nice-modal-react';
import SendOTPForm from "@/app/(auth)/sms_test/SendOTPForm";
import VerifyOTPForm from "@/app/(auth)/sms_test/VerifyOTPForm";
import {StytchProvider} from "@stytch/nextjs";
import {createStytchUIClient} from "@stytch/nextjs/ui";

const stytch = createStytchUIClient("public-token-test-4991da25-43df-44b0-806a-6cdbdf711d5c");


// @ts-ignore
export default NiceModal.create(({ user }) => {
    const modal = useModal();
    const [form] = Form.useForm();
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
            title={user ? 'Edit User' : 'New User'}
            okText={user ? 'Update' : 'Create'}
            onOk={handleSubmit}
        >
            <StytchProvider stytch={stytch}>
                {!otpSent ? (
                    <SendOTPForm
                        phoneNumber={phoneNumber}
                        setMethodId={setMethodId}
                        setOTPSent={setOTPSent}
                        setPhoneNumber={setPhoneNumber}
                    />
                ) : (
                    <VerifyOTPForm methodId={methodId} phoneNumber={phoneNumber}/>
                )}
            </StytchProvider>
        </Modal>
    );
});