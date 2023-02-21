// Product Dimension Model

module.exports = (sequelize, DataTypes) => {

    const ProductDimension = sequelize.define("product_dimension", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        product_id: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        length: {
            type: DataTypes.STRING,
            allowNull: true
        },
        width: {
            type: DataTypes.STRING,
            allowNull: true
        },
        height: {
            type: DataTypes.STRING,
            allowNull: true
        },
        dimension_class_id: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        tenant_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_by: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        updated_by: {
            type: DataTypes.INTEGER,
            allowNull: true
        },

    },
        {
            timestamps: true,
            tableName: 'product_dimension',
        })

    return ProductDimension
}