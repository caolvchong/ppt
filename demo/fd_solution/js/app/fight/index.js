/**
 * User: caolvchong@gmail.com
 * Date: 5/30/13
 * Time: 3:58 PM
 */
define(function(require, exports, module) {
    var $ = require('jquery');
    var fight = require('../../lib/fight');

    $(function() {
        var attack = $('#attack');
        var defence = $('#defence');
        var fightBtn = $('#fight');

        fightBtn.click(function() {
            var attackName = attack.val();
            var defenceName = defence.val();
            var result = fight(attackName, defenceName);
            var attackLog = result.attack.log;
            var defenceLog = result.defence.log;
            var log = [];
            var i;
            var len;
            var item;
            for(i = 0, len = attackLog.length; i < len; i++) {
                item = attackLog[i];
                log[2 * i] = attackName + '使用【' + (item.type === 'normal' ? '普通攻击' : '必杀技能') + '】，造成' + item.hurt + '点伤害，' + defenceName + '剩余血量' + item.left;
            }
            for(i = 0, len = defenceLog.length; i < len; i++) {
                item = defenceLog[i];
                log[2 * i + 1] = defenceName + '使用【' + (item.type === 'normal' ? '普通攻击' : '必杀技能') + '】，造成' + item.hurt + '点伤害，' + attackName + '剩余血量' + item.left;
            }
            log.unshift('初始血量，攻击方' + attackName + ':' + result.attack.life + ' / 防守方' + defenceName + ':' + result.defence.life);
            log.push((result.result ? attackName : defenceName) + '取得了胜利')
            $('#box').html(log.join('<br/>'));
        });
    });

});