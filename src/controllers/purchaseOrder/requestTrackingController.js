// ALL REQUIRES;
const { requestTracking } = require("../../helpers/purchaseOrderHelper");
const { checkPermission } = require("../../utils/permissionChecker");
const { singleResponse } = require("../../utils/response");


// CONTROLLER
module.exports = async (req, db, user, isAuth, TENANTID) => {

    // Permission Name of this API
    const permissionArray = ["po-request-tracking-no", "purchase-order"];
    for (const item of permissionArray) {
        const checkPermissions = await checkPermission(db, user, TENANTID, item);
        if (!checkPermissions.success) {
            return { message: "You dont have access to this route, please contact support to have you give this route permission!!!", status: false }
        }
    }

    // HELPER
    const data = await requestTracking(req, db, user, isAuth, TENANTID);

    return singleResponse(data);

}