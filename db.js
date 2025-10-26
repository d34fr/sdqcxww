const fs = require('fs');
const path = require('path');

class SimpleDB {
    constructor(filename) {
        this.filename = filename;
        this.data = this.load();
    }

    load() {
        try {
            if (fs.existsSync(this.filename)) {
                const content = fs.readFileSync(this.filename, 'utf8');
                return JSON.parse(content);
            }
        } catch (error) {
            console.error('Erreur lors du chargement de la base de données:', error);
        }
        return {};
    }

    save() {
        try {
            fs.writeFileSync(this.filename, JSON.stringify(this.data, null, 2));
        } catch (error) {
            console.error('Erreur lors de la sauvegarde de la base de données:', error);
        }
    }

    get(key) {
        return this.data[key];
    }

    set(key, value) {
        this.data[key] = value;
        this.save();
        return value;
    }

    has(key) {
        return key in this.data;
    }

    delete(key) {
        delete this.data[key];
        this.save();
    }

    all() {
        return this.data;
    }
}

module.exports = SimpleDB;
