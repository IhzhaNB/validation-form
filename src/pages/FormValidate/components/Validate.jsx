import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Validate = () => {
  const doRegister = (values) => {
    setTimeout(() => {
      formik.setSubmitting(false);
      formik.resetForm();
    }, 2000);
  };

  const formik = useFormik({
    // initial values
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreement: "false",
    },
    // validation scheme
    validationSchema: Yup.object({
      username: Yup.string().required("Username tidak boleh kosong"),
      email: Yup.string()
        .required("Email tidak boleh kosong")
        .email("Email tidak ditemukan"),
      password: Yup.string()
        .required("Password tidak boleh kosong")
        .min(6, "Minimal Password 6 karakter")
        .matches(/[a-z]/g, "Harus berisi setidaknya 1 huruf kecil")
        .matches(/[A-Z]/g, "Harus berisi setidaknya 1 huruf besar")
        .matches(/[0-9]/g, "Harus berisi setidaknya 1 nomor")
        .matches(/^\S*$/, "Tidak boleh mengandung spasi"),
      confirmPassword: Yup.string()
        .required("Confirm Password tidak boleh kosong")
        .oneOf([Yup.ref("password")], "Harus sama dengan password diatas"),
      agreement: Yup.bool().isTrue("Setujui sebelum mengirimkan."),
    }),
    // handle submit
    onSubmit: doRegister,
  });

  return (
    <div className="validate__container">
      <div className="validate__wrapper">
        <h1>Register Form</h1>
        <div className="validate__content">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label className="label-required">Username</label>
              <input
                type="text"
                name="username"
                /* (jika lebih banyak)
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}*/

                // yang sederhana
                {...formik.getFieldProps("username")}
              />
              {formik.touched.username && formik.errors.username && (
                <div className="error">{formik.errors.username}</div>
              )}
            </div>

            <div className="form-group">
              <label className="label-required">Email</label>
              <input
                type="text"
                name="email"
                /* (jika lebih banyak)
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} */

                // yang sederhana
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="error">{formik.errors.email}</div>
              )}
            </div>

            <div className="form-group">
              <label className="label-required">Password</label>
              <input
                type="password"
                name="password"
                /* (jika lebih banyak)
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} */

                // yang sederhana
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="error">{formik.errors.password}</div>
              )}
            </div>

            <div className="form-group">
              <label className="label-required">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                /* (jika lebih banyak)
            value={formik.values.confimPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} */

                // yang sederhana
                {...formik.getFieldProps("confirmPassword")}
              />
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <div className="error">{formik.errors.confirmPassword}</div>
                )}
            </div>

            <div className="form-group">
              <input
                id="agreement"
                type="checkbox"
                name="agreement"
                checked={formik.values.agreement}
                /* (jika lebih banyak)
            value={formik.values.agreement}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} */

                // yang sederhana
                {...formik.getFieldProps("agreement")}
              />
              <label htmlFor="agreement" className="label-required">
                I agree to Terms of Service
              </label>
              {formik.touched.agreement && formik.errors.agreement && (
                <div className="error">{formik.errors.agreement}</div>
              )}
            </div>
            <button type="submit" disabled={formik.isSubmitting}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Validate;
