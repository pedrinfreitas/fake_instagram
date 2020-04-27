const Usuario = (sequelize, DataTypes) => {
    return sequelize.define(
        'Usuario',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: true
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: true
            },
            email: {
                type: DataTypes.STRING,
                allowNull: true
            },
            senha: {
                type: DataTypes.STRING,
                allowNull: true
            }
        },
        {
            tableName: "usuarios",
            timestamps: false
        }
    )
}

module.exports = Usuario;