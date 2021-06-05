import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from '../axios';

function CheckoutForm() {
    return (
        <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          street: "",
          housenr: "",
          postalCode: "",
          city: "",
          country: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("Required"),
          lastName: Yup.string().required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          street: Yup.string().required("Required"),
          housenr: Yup.number().required("Required"),
          postalCode: Yup.number().required("Required"),
          city: Yup.string().required("Required"),
          country: Yup.string().required("Required"),
        })}
        onSubmit={({setSubmitting}) => {
            setSubmitting(true)
            alert("form is validated")
        }

            // async function(values){
            //     const response = await axios({
            //         url: 'addresses',
            //         method: "POST",
            //         data: {
            //             "street" : values.street,
            //             "houseNumber" : values.housenr,
            //             "postalCode" : values.postalCode,
            //             "city" : values.city,
            //             "country" : values.country
            //         } 
            //     })
            //     console.log(response.error)
            //     const addressId = response.data;
            //     console.log(addressId)
            // }
        }
      >
          {({isSubmitting}) => (
              <Form className="checkout-form">
              <label htmlFor="firstname">Voornaam</label>
              <Field name="firstname" type="text" className="form-input" />
              <ErrorMessage name="firstname" className="error-msg" />
    
              <label htmlFor="lastname">Familienaam</label>
              <Field name="lastname" type="text" className="form-input" />
              <ErrorMessage name="lastname" className="error-msg" />
    
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" className="form-input" />
              <ErrorMessage name="email" className="error-msg" />
    
              <label htmlFor="street">Straat</label>
              <Field name="street" type="text" className="form-input" />
              <ErrorMessage name="street" className="error-msg" />
    
              <label htmlFor="housenr">Huisnummer</label>
              <Field name="housenr" type="number" className="form-input" />
              <ErrorMessage name="housenr" className="error-msg" />
    
              <label htmlFor="postalCode">Postcode</label>
              <Field name="postalCode" type="number" className="form-input" />
              <ErrorMessage name="postalCode" className="error-msg" />
    
              <label htmlFor="city">Stad</label>
              <Field name="city" type="text" className="form-input" />
              <ErrorMessage name="city" className="error-msg" />
    
              <label htmlFor="country">Land</label>
              <Field
                name="country"
                type="text"
                as="select"
                className="form-input"
              >
                <option value="belgium">België</option>
                <option value="netherlands">Nederland</option>
              </Field>
              <ErrorMessage name="country" className="error-msg" />
    
              <button type="submit">Submit</button>
            </Form>
          )}
        
      </Formik>
    )
}

export default CheckoutForm
