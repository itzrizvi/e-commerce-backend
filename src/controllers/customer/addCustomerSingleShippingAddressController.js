const { addCustomerSingleShippingAddress } = require("../../helpers/customerHelper");
const { singleResponse } = require("../../utils/response");

// CONTROLLER
module.exports = async (req, db, user, isAuth, TENANTID) => {

    // SEND TO HELPER
    const data = await addCustomerSingleShippingAddress(req, db, user, isAuth, TENANTID);

    return singleResponse(data);

}