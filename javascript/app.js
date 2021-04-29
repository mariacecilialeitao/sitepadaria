const loadProducts = (produtos,idDivParent) => {
    const parentDiv = document.querySelector(IdDivParent)
    produtos.forEach(produto => {
        const html = `
        <article class="prato">
                    <img src="${produto.img}" alt="${Produto.title}">
                    <h4>${produto.title}</h4>
                    <h4>R$ ${produto.value}</h4>
                    <p>${produto.description}</p>
                    <button type="button" onclick="modalTrigger()" >Quero este prato</button>

            </article>
        `

        parentDiv.insertAdjacentHTML('beforeend',html)
    })

}

const modalTrigger = () => {
    const modal = document.querySelector(' .modal')

    if(modal.classList.contains('hide')){
        modal.classList.remove('hide')
    }else{
        modal.classList.add('hide')
    }
}


const search = (products,searchTerm) => products.filter(product => product.title.includes(`${searchTerm}`)  ||
product.description.includes(`${searchTerm}`)) 


const loadSearch = (form, productsDivId) => {
    const producstDiv = document.querySelector(productsDivId)
    const inputSearch = form.querySelector('#inputSearch')
    form.addEventlistener('submit' , (e) => {
        e.preventDefault()
        if (inputSearch.value != '') {
        producstDiv.querySelectorAll('.Cardápio').forEach(prato =>{
                prato.remove()
            })

            const results = search(produtos, inputSearch.value)
            results.forEach(produto => {
                const html = `
                <article class="prato">
                            <img src="${produto.img}" alt="${Produto.title}">
                            <h4>${produto.title}</h4>
                            <h4>R$ ${produto.value}</h4>
                            <p>${produto.description}</p>
                            <button type="button" onclick="modalTrigger()" >Quero este prato</button>
        
                    </article>
                `
        
                parentDiv.insertAdjacentHTML('beforeend',html)
            })



    }

    




})

}





loadProducts(produtos, '#product-div')
loadSearch(document.querySelector('#formSearch'),'#product-div')