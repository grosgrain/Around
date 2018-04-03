import React from 'react';
import {Form, Input} from 'antd';
import {PicturesWall} from "./PicturesWall"

class CreatePostForm extends React.Component{
    render() {
        const FormItem = Form.Item;
        const {getFieldDecorator} = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        return (
            <Form layout="vertical">
                <FormItem
                    {...formItemLayout}
                    label="Message">
                    {getFieldDecorator('Message', {
                        rules: [{ required: true, message: 'Please input the message!' }],
                    })(
                        <Input />
                    )}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label="Picture">
                    {getFieldDecorator('Picture', {
                        rules: [{ required: true, message: 'Please upload the picture!' }],
                    })(
                        <PicturesWall/>
                    )}
                </FormItem>
            </Form>
        );
    }
}
export const WrappedCreatePostForm = Form.create()(CreatePostForm);