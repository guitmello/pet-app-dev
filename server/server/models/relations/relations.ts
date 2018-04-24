const Relations = (model) => {

  //Animal - Raca
  model.Animal.hasMany(model.Raca, { foreignKey: 'cd_raca_fk' });
  model.Raca.belongsTo(model.Animal, { foreignKey: 'cd_raca_fk' });

  //Animal - Especie
  model.Animal.hasMany(model.Especie, { foreignKey: 'cd_especie_fk' });
  model.Especie.belongsTo(model.Animal, { foreignKey: 'cd_especie_fk' });

  //Animal - Usuario
  model.Animal.hasMany(model.Usuario, { foreignKey: 'cd_usuario_fk' });
  model.Usuario.belongsTo(model.Animal, { foreignKey: 'cd_usuario_fk' });

  //Chat - Usuario
  model.Chat.hasMany(model.Usuario, { foreignKey: 'cd_usuario_enviou_fk' });
  model.Usuario.belongsTo(model.Chat, { foreignKey: 'cd_usuario_enviou_fk' });

  model.Chat.hasMany(model.Usuario, { foreignKey: 'cd_usuario_recebeu_fk' });
  model.Usuario.belongsTo(model.Chat, { foreignKey: 'cd_usuario_recebeu_fk' });

  model.Chat.hasMany(model.Usuario, { unique: 'cd_ip_usuario_enviou_fk' });
  model.Usuario.belongsTo(model.Chat, { unique: 'cd_ip_usuario_enviou_fk' });

  model.Chat.hasMany(model.Usuario, { foreignKey: 'cd_ip_usuario_recebeu_fk' });
  model.Usuario.belongsTo(model.Chat, { foreignKey: 'cd_ip_usuario_recebeu_fk' });

  //Mensagem - Chat
  model.Mensagem.hasMany(model.Chat, { foreignKey: 'cd_chat_fk' });
  model.Chat.belongsTo(model.Mensagem, { foreignKey: 'cd_chat_fk' });
}

module.exports = Relations;
