const searchInput = document.querySelector("input");
        const resultContainer = document.querySelector(".result_container")
        
    
        searchInput.addEventListener("keydown", async (e) => {
            const inputValue = searchInput.value.trim()
            if(e.key === "Enter"){
            resultContainer.innerHTML = ""
            document.querySelector(".spinner").classList.remove("show-spinner")
            const apiUrl = `https://apis.ccbp.in/wiki-search?search=${inputValue}`
            const response = await fetch(apiUrl)
            const responseData = await response.json()
            document.querySelector(".spinner").classList.add("show-spinner")
            
            responseData.search_results.forEach(element => {
              
                
               const {title, link, description} = element
               const heading = document.createElement("h1")
               heading.innerHTML = title
               resultContainer.appendChild(heading)

               const resultLink = document.createElement("a")
               resultLink.href = link
               resultLink.innerHTML = link
               resultContainer.appendChild(resultLink)

               const resultDes = document.createElement("p")
               resultDes.innerHTML = description
               resultContainer.appendChild(resultDes)
              
                
            });
            }
             
            
        })