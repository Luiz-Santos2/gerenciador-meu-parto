import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth"
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebase";

const FormularioService = {

     /**
     * Retorna a lista de formularios
     * @returns 
     */
    buscarFormularios: async (): Promise<any[]> => {
        //Retorna a lista de formulários
        return [
            { id: "1", descricao: 'Sobre' },
            { id: "2", descricao: 'Home' },
            { id: "3", descricao: 'Menu periodo e fases' },
            { id: "4", descricao: 'Detalhes período fases' },
            { id: "5", descricao: 'Menu como aliviar a dor' },
            { id: "6", descricao: 'Detalhes Como aliviar a dor' },
            { id: "7", descricao: 'Posição para parir' },
            { id: "8", descricao: 'Menu mamadas inicias' },
            { id: "9", descricao: 'Detalhes primeira tela de mamadas Inicias' },
            { id: "10", descricao: 'Detalhes segunda e terceira tela de mamadas inicias' },
            { id: "11", descricao: 'Menu cuidados no inicio do pós-parto' },
            { id: "12", descricao: 'Detalhes da primeira tela de cuidados no inicio do pós-parto' },
            { id: "13", descricao: 'Detalhes da segunda e terceira tela de cuidados no inicio do pós-parto' },
        ]
    },

    /**
     * Retorna os dados de um formulario
     * @param id 
     * @returns 
     */
    buscar: async (uid: string): Promise<any>  => {
        return getDoc(doc(db, 'forms', uid))
            .then(retorno => { 
                return (retorno.exists() ? retorno.data() : null)
            })
            .catch(erro => null)
    },

    /**
     * Editar um formulario
     * @param formulario 
     * @returns 
     */
    editar: async (formulario:any): Promise<{sucesso: boolean}> => {
        return updateDoc(doc(db, 'forms', formulario.uid), formulario)
            .then(() => { return { sucesso: true }})
            .catch(() => { return { sucesso: false }});
    }


}


export const useFormularioService = () => FormularioService;