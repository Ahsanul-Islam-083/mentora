"use client";


import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const CancelEnrollButton = ({ id }) => {
    // console.log(id,"enDI");
    
    const router = useRouter();
    
    const handleCancel = async () => {
        const {data:jwtData}= await authClient.token();
        const token= jwtData?.token;
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enrollments/${id}`,{
            method: "DELETE",
            headers:{
                Authorization: `Bearer ${token}`
            }
        })

        if (res.ok) {
            toast.success('Cancelled Enrollment');
            router.push('/dashboard')
        }else{
            toast.error('Failed to cancel this enrollment.')
        }

    }

    return (
        <AlertDialog>
            <Button
                color="danger"
                variant="danger-soft"
                size="sm"
            >
                Cancel
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Confirm Cancellation</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p className="text-slate-600">
                                Are you sure you want to cancel this enrollment? This action cannot be undone and you
                                will lose access to the course materials.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button
                                slot="close"
                                variant="tertiary"
                            >
                                Keep Enrollment
                            </Button>
                            <Button
                            onPress={handleCancel}
                                slot="close"
                                color="danger"
                                className="font-bold"

                            >
                                Yes, Cancel
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default CancelEnrollButton;