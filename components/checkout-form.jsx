import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from '../axios';

function CheckoutForm() {

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    housenr: "",
    postalCode: "",
    city: "",
    country: "",
  }
  const yupSchema = Yup.object({
    firstname: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
    street: Yup.string().required("Required"),
    housenr: Yup.number().required("Required"),
    postalCode: Yup.number().required("Required"),
    city: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
  })

    return (
        <Formik
        initialValues={ initialValues }
        validationSchema= { yupSchema }
        onSubmit={

            async function(values){
                const response = await axios({
                    url: 'addresses',
                    method: "POST",
                    data: {
                        "street" : values.street,
                        "houseNumber" : values.housenr,
                        "postalCode" : values.postalCode,
                        "city" : values.city,
                        "country" : values.country,
                        "customers" : [
                          {"firstname" : values.firstname,
                           "lastname" : values.lastname,
                           "email" : values.email
                          }
                        ]
                    } 
                })
                const data = await response.data;
                console.log(data);

                const responseOrder = await axios({
                  url: 'orders',
                  method: "POST",
                  data: {
                    "address" : `api/addresses/${data.id}`,
                    "totalPrice" : 13.45,
                    "totalItems" : 3,
                    "customer" : `api/customers/${data.customers[0].id}`,
                    "orderedProducts" : [{
                      "product" : "api/products/2",
                      "price" : 4.54
                    }]
                  }
                })
                const dataOrder = responseOrder.data;
                console.log(dataOrder);
            }
          }
      >
        {(props) => {
          // console.log(props)

          return(
            <Form className="checkout-form">

              <div className="form-elements">
              <div className="name-wrapper">
                <label htmlFor="firstname">Voornaam</label>
                <Field name="firstname" type="text" className="form-input" />
                <ErrorMessage component="div" name="firstname" className="error-msg" />
              </div>
    
              <div className="name-wrapper">
                <label htmlFor="lastname">Familienaam</label>
                <Field name="lastname" type="text" className="form-input" />
                <ErrorMessage component="div" name="lastname" className="error-msg" />
              </div>
              </div>

              <label htmlFor="email">Email</label>
              <Field name="email" type="email" className="form-input" />
              <ErrorMessage component="div" name="email" className="error-msg" />

              <div className="form-elements">
              <div className="address-wrapper">
                <label htmlFor="street">Straat</label>
                <Field name="street" type="text" className="form-input" />
                <ErrorMessage component="div" name="street" className="error-msg" />
              </div>
    
              <div className="number-wrapper">
                <label htmlFor="housenr">Huisnummer</label>
                <Field name="housenr" type="number" className="form-input" />
                <ErrorMessage component="div" name="housenr" className="error-msg" />
              </div>
              </div>

              <div className="form-elements">
                <div className="number-wrapper">
                  <label htmlFor="postalCode">Postcode</label>
                  <Field name="postalCode" type="number" className="form-input" />
                  <ErrorMessage component="div" name="postalCode" className="error-msg" />
                </div>

                <div className="address-wrapper">
                  <label htmlFor="city">Stad</label>
                  <Field name="city" type="text" className="form-input" />
                  <ErrorMessage component="div" name="city" className="error-msg" />
                </div>
              </div>
    
              <label htmlFor="country">Land</label>
              <Field name="country" type="text" className="form-input" />
              <ErrorMessage component="div" name="country" className="error-msg" />
    
              <button className="btn btn-order" type="submit">Submit</button>
            </Form>
          )
        }}
      </Formik>
    )
}

export default CheckoutForm
