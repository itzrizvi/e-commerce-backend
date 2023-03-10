// All Requires
const { getSingleShippingMethod } = require("../../helpers/shippingMethodHelper");
const { checkPermission } = require("../../utils/permissionChecker");
const { singleResponse } = require("../../utils/response");


// GET SINGLE PRODUCT DETAIL CONTROLLER
module.exports = async (req, db, user, isAuth, TENANTID) => {

    // Permission Name of this API
    const permissionName = "shipping-method";
    // Check Permission
    const checkPermissions = await checkPermission(db, user, TENANTID, permissionName);
    if (!checkPermissions.success) {
        return { message: "You dont have access to this route, please contact support to have you give this route permission!!!", status: false };
    }

    // Sending Request to Helper
    const data = await getSingleShippingMethod(req, db, user, isAuth, TENANTID);

    // Final Response
    return singleResponse(data);
}