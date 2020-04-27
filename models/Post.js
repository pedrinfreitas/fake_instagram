const Post = (sequelize, DataTypes) => {
  return sequelize.define(  

      'Post',
      {
          id: {
              type: DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true,
              allowNull: true
          },
          texto: {
              type: DataTypes.STRING,
              allowNull: true
          },
          img: {
              type: DataTypes.STRING,
              allowNull: true
          },
          usuarios_id: {
              type: DataTypes.INTEGER,
              allowNull: true
          },
          n_likes: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
      },
      {
          tableName: "posts",
          timestamps: false
      }
  )
}

module.exports = Post;