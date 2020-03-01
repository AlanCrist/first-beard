import Sequelize, { Model } from "sequelize";

import authConfig from "../../config/auth";

class File extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                path: Sequelize.STRING,
                url: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        return `${authConfig.address_acess}/files/${this.path}`;
                    }
                }
            },
            {
                sequelize
            }
        );

        return this;
    }
}

export default File;
