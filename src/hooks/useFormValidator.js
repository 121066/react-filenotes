import { useState } from 'react';

// 自定义表单验证Hooks
export const useFormValidator = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  // 处理表单字段的变化
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // 处理表单提交
  const handleSubmit = (e) => {
    e.preventDefault();
    // 执行验证逻辑
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // 验证通过，执行提交逻辑
      submitForm(values);
    }
  };

  // 表单字段验证逻辑
  const validate = (values) => {
    let errors = {};

    // 进行具体的验证逻辑，根据需要添加更多验证规则
    if (!values.username) {
      errors.username = '请填写用户名';
    }

    if (!values.email) {
      errors.email = '请填写邮箱';
    } else if (!isValidEmail(values.email)) {
      errors.email = '请输入有效的邮箱地址';
    }

    // 返回验证错误信息
    return errors;
  };

  // 判断邮箱地址是否有效
  const isValidEmail = (email) => {
    // 简单的邮箱验证逻辑，根据需要可以进行更复杂的验证
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return { values, errors, handleChange, handleSubmit };
};