'use client'

import { useMemo, useCallback, useState, useEffect } from 'react';
import { Button, Table } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { useModal } from '@ebay/nice-modal-react';
import NiceModal from '@ebay/nice-modal-react';
import UserInfoModal from '../../../components/ui/WaitlistModal';
import { StytchProvider } from "@stytch/nextjs";

import {useStytch, useStytchUser} from "@stytch/nextjs";
import {createStytchUIClient} from "@stytch/nextjs/ui";
const stytch = createStytchUIClient("public-token-test-4991da25-43df-44b0-806a-6cdbdf711d5c");


export default function UserList() {
    const userModal = useModal(UserInfoModal);
    const [users, setUsers] = useState(null);
// The useStytchUser hook will return the existing Stytch User object if one exists
    const { user, isInitialized } = useStytchUser();

    useEffect(() => {
        // call api or anything
        console.log("loaded");
        if (isInitialized && user) {
            console.log(user.phone_numbers)
            testStytch()
        }
    });

    const testStytch = async () => {
        // Replace with your API endpoint
        console.log("testStytch")
        const response = await fetch('http://localhost:4000/testStytch', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        });
        console.log("Got response")
        console.log(response)
    };

    const handleNewUser = useCallback(() => {
        console.log("handleNewUser")
        userModal.show().then((newUser) => {
            console.log("handleNewUser2")
        });
    }, [userModal, users]);

    // @ts-ignore
    const handleEditUser = useCallback(
        // @ts-ignore
        (user) => {
            // @ts-ignore
            userModal.show({ user }).then((newUser) => {
                // @ts-ignore
                setUsers((users) => {
                    // Modify users immutablly
                    // @ts-ignore
                    const i = users.findIndex((u) => u.id === newUser.id);
                    // @ts-ignore
                    const updated = { ...users[i], ...newUser };
                    // @ts-ignore
                    const arr = [...users];
                    arr.splice(i, 1, updated);
                    return arr;
                });
            });
        },
        [userModal],
    );

    const columns = useMemo(
        () => [
            {
                title: 'Name',
                dataIndex: 'name',
                width: '150px',
            },
            {
                title: 'Job Title',
                dataIndex: 'job',
            },
            {
                title: 'Edit',
                width: '100px',
                // @ts-ignore
                render(value, user) {
                    return (
                        <Button
                            type="link"
                            icon={<EditOutlined />}
                            onClick={() => {
                                handleEditUser(user);
                            }}
                        />
                    );
                },
            },
        ],
        [handleEditUser],
    );

    // @ts-ignore
    return (
        <StytchProvider stytch={stytch}>
            <NiceModal.Provider>
            <section className="bg-gradient-to-b from-gray-100 to-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                        <div>
                            <div>
                                <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" onClick={handleNewUser}>Start free trial</button>
                            </div>
                            <Button type="primary" onClick={handleNewUser}>
                                + New User
                            </Button>
                            <Table
                                size="small"
                                rowKey="id"
                                pagination={false}
                                columns={columns}
                                // @ts-ignore
                                dataSource={users}
                                style={{marginTop: '20px'}}
                            />
                        </div>
                    </div>
                </div>
            </section>
            </NiceModal.Provider>
        </StytchProvider>
    );
}