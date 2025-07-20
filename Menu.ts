import readlinesync = require("readline-sync");

export function main(){
    let opcao: number;

    while (true) {
        console.log("***************************");
        console.log("      🎮 GameStory 🎮     ");
        console.log("***************************");
        console.log("🪪 1 - Cadastrar-se ");
        console.log("🪙 2 - Saldo ");
        console.log("📑 3 - Lista de produtos ");
        console.log("🛒 4 - Comprar produto ");
        console.log("📦 5 - Ver carrinho ");
        console.log("🗑️ 6 - Tirar um produto do carrinho ");
        console.log("✅ 7 - Finalizar compra ");
        console.log("❌ 0 - Sair ");
        console.log("***************************");
        console.log("Digite a opção desejada: ");
        opcao = readlinesync.questionInt();

        if (opcao == 0) {
            console.log("Obrigado por usar o GameStory! Até logo!");
            process.exit(0);
        }
        
        switch (opcao) {
            case 1:console.log("Cadastrar-se: ");
                // Implementar lógica de cadastro
                break;
            case 2:console.log("Saldo: ");
                // Implementar lógica de exibição de saldo     
                break;
            case 3:console.log("Lista de produtos: ");
                // Implementar lógica de exibição de produtos
                break;
            case 4:console.log("Comprar produto: ");
                // Implementar lógica de compra de produto
                break;
            case 5:console.log("Ver carrinho: "); 
                // Implementar lógica de exibição do carrinho
                break;
            case 6:console.log("Tirar um produto do carrinho: ");
                // Implementar lógica de remoção de produto do carrinho
                break;
            case 7:console.log("Finalizar compra: ");
                // Implementar lógica de finalização de compra
                break;
            case 0:console.log("Sair: ");
                // Implementar lógica de saída
                break;
            default: console.log("Opção inválida! Tente novamente.");
                break;

    }
} 
}
main();