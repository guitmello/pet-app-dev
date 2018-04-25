var Relations = function (model) {
    //Animal - Raca
    model.Raca.hasMany(model.Animal, { foreignKey: 'cd_raca_fk' });
    model.Animal.belongsTo(model.Raca, { foreignKey: 'cd_raca_fk' });
    //Animal - Especie
    model.Especie.hasMany(model.Animal, { foreignKey: 'cd_especie_fk' });
    model.Animal.belongsTo(model.Especie, { foreignKey: 'cd_especie_fk' });
    //Animal - Usuario
    model.Usuario.hasMany(model.Animal, { foreignKey: 'cd_usuario_fk' });
    model.Animal.belongsTo(model.Usuario, { foreignKey: 'cd_usuario_fk' });
    //Chat - Usuario
    model.Usuario.hasMany(model.Chat, { foreignKey: 'cd_usuario_enviou_fk' });
    model.Chat.belongsTo(model.Usuario, { foreignKey: 'cd_usuario_enviou_fk' });
    model.Usuario.hasMany(model.Chat, { foreignKey: 'cd_usuario_recebeu_fk' });
    model.Chat.belongsTo(model.Usuario, { foreignKey: 'cd_usuario_recebeu_fk' });
    model.Usuario.hasMany(model.Chat, { foreignKey: 'cd_ip_usuario_enviou_fk' });
    model.Chat.belongsTo(model.Usuario, { foreignKey: 'cd_ip_usuario_enviou_fk' });
    model.Usuario.hasMany(model.Chat, { foreignKey: 'cd_ip_usuario_recebeu_fk' });
    model.Chat.belongsTo(model.Usuario, { foreignKey: 'cd_ip_usuario_recebeu_fk' });
    //Mensagem - Chat
    model.Chat.hasMany(model.Mensagem, { foreignKey: 'cd_chat_fk' });
    model.Mensagem.belongsTo(model.Chat, { foreignKey: 'cd_chat_fk' });
};
module.exports = Relations;
