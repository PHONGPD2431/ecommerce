import { Col, Row } from 'antd';
import { Formik } from 'formik';
import { Form, FormItem, Input } from 'formik-antd';
import { get, isInteger } from 'lodash';
import { observer } from 'mobx-react';
import React, { FC } from 'react';
import * as yup from 'yup';

import store, { CustomerInfo } from './store';

const validationSchema = yup.object().shape<CustomerInfo>({
  fullname: yup.string().required("Họ tên là bắt buộc!"),
  phone: yup
    .string()
    .test(
      "valid",
      "Số điện thoại không hợp lệ!",
      val => val && isInteger(Number(val)) && val.length === 9
    )
    .required("Số điện thoại là bắt buộc!"),
  email: yup
    .string()
    .email("Email không hợp lệ!")
    .required("Email là bắt buộc!"),
  address: yup.string().required("Địa chỉ nhận hàng là bắt buộc!")
});

const OrderForm: FC = observer(() => {
  const { customerInfo, setCustomerInfo, setIsValid } = store;

  const initialValues: CustomerInfo = {
    fullname: get(customerInfo, "fullname", ""),
    phone: get(customerInfo, "phone", ""),
    email: get(customerInfo, "email", ""),
    address: get(customerInfo, "address", "")
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={setCustomerInfo}
    >
      {({ isValid }) => {
        setIsValid(isValid);

        return (
          <Form id="orderForm">
            <FormItem name="fullname" label="Họ tên">
              <Input name="fullname" placeholder="Nhập họ tên" />
            </FormItem>
            <Row gutter={8}>
              <Col xs={24} md={12}>
                <FormItem name="phone" label="Số điện thoại">
                  <Input
                    addonBefore="+84"
                    name="phone"
                    placeholder="Nhập số điện thoại"
                  />
                </FormItem>
              </Col>
              <Col xs={24} md={12}>
                <FormItem name="email" label="Email">
                  <Input name="email" placeholder="Nhập email" />
                </FormItem>
              </Col>
            </Row>
            <FormItem name="address" label="Địa chỉ nhận hàng">
              <Input name="address" placeholder="Nhập địa chỉ nhận hàng" />
            </FormItem>
          </Form>
        );
      }}
    </Formik>
  );
});

export default OrderForm;
