'use client'
import { useCreateReviewMutation } from '@/redux/features/website/reviewSlice';
import { Modal, Form, Input } from 'antd'
import Swal from 'sweetalert2';
const { TextArea } = Input


const AddReviewModal = ({ isModalOpen, setIsModalOpen }: { isModalOpen: boolean, setIsModalOpen: (isModalOpen: boolean) => void }) => {

    const [form] = Form.useForm()
    const [createReview] = useCreateReviewMutation()

    const handleCancel = () => {
        setIsModalOpen(false)
        form.resetFields()
    }

    const onFinish = async (values: { description: string }) => {
        const data = {
            description: values.description
        }

        await createReview(data).then((res) => {
    
            if (res?.data?.success) {
                Swal.fire({
                    text: res?.data?.message,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    setIsModalOpen(false)
                    form.resetFields()
                })

            } else {
                Swal.fire({
                    title: "Oops",
                    text: res?.data?.message,
                    icon: "error",
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
        })

    }
    return (
        <div>

            <Modal
                title={<p className=' text-gray-700 text-center text-[26px] font-medium'>Give your Review</p>}
                open={isModalOpen}
                onCancel={handleCancel}
                footer={null}
                width={480}
                centered

                className="review-modal"
            >
                <Form
                    form={form}
                    onFinish={onFinish}
                    layout="vertical"
                    className=""
                >
                    <Form.Item
                        name="description"
                        label={<p className=' text-gray-500 mt-6'>Comments</p>}
                        className="mb-6"
                    >
                        <TextArea
                            placeholder="Write your comment"
                            rows={6}
                            className="resize-none rounded-lg"
                        />
                    </Form.Item>
                    <Form.Item className="mb-0">
                        <button
                            type="submit"
                            className="w-full h-12 bg-primary text-white "
                        >
                            Submit
                        </button>
                    </Form.Item>
                </Form>
            </Modal>

            <style jsx global>{`
          .review-modal .ant-modal-content {
            padding: 24px;
            border-radius: 8px;
          }
          
          .review-modal .ant-modal-header {
            margin-bottom: 0;
            padding: 0;
          }
          
          .review-modal .ant-modal-title {
            font-size: 18px;
            color: #111827;
          }
          
          .review-modal .ant-form-item-label label {
            color: #374151;
            font-size: 14px;
          }
          
          .review-modal .ant-input {
            border-color: #E5E7EB;
          }
          
          .review-modal .ant-input:focus,
          .review-modal .ant-input-focused {
            border-color: #0F1E54;
            box-shadow: none;
          }
        `}</style>
        </div>
    );
};

export default AddReviewModal;