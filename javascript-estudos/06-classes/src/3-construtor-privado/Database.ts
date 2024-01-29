
/**
 * Esta classe so ira retornar uma instancia, usando o padrao de projetos singleton
 */

export class Database {

    private static database: Database;

    private constructor(
        private host: string,
        private user: string,
        private password: string,
        private database: string
    ) { }

    conectar() {
        console.log(`Conectado a : ${this.host} ${this.user} ${this.password} ${this.database}`)
    }

    /**
     * Factory function
     * cria uma instancia da classe database
     */
    static getDatabase(host: string, user: string, password: string, database: string) {
        if (Database.database) {
            console.log("Retornando a conecxão já existente!!!")
            return Database.database
        }

        console.log("Criando a instância da conexão...")
        Database.database = new Database(host, user, password, database)
        return Database.database
    }
}


const con01 = Database.getDatabase('localhost', 'root', '1234', 'dbdata');

con01.conectar();

const con02 = Database.getDatabase('localhost', 'root', '1234', 'dbdata');

con02.conectar();

console.log(con01 === con02);