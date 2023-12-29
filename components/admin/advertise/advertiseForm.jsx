
import {
  Button,
  Form,
  Input,
} from "antd";

const AdvertiseForm = ({ onFinish, initialValues, isupdate = false }) => {
  return (
    <div className=" w-[80%] mx-auto ">
      <div className=" w-full md:w-1/2 border-2 py-6 px-6">
        <Form
          layout="vertical"
          // onFinish same as submit normal form
          onFinish={(values) =>
            // name of our function
            onFinish({
              ...values,
            })
          }
          initialValues={{
            title: initialValues?.title || "",
          }}
        >
          <Form.Item name="title" label="Add Advertise Title">
            <Input />
          </Form.Item>

          <div className=" grid gap-3 md:grid-cols-4 grid-cols-1"></div>

          <div className=" ">
            <Button
              className=" mt-4  block w-1/3 bg-blue-500 mx-auto"
              type="primary"
              htmlType="submit"
            >
              Publish
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AdvertiseForm;
