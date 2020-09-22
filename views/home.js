$(document).ready(function(){
    $("#searchForm").on("submit",(event)=>{
        let searchText = $("#searchText").val();
        if(searchText.length === 0) alert("Enter a movie name ...");
        else getMovie(searchText);
        event.preventDefault();
    })
})

async function getMovie(searchText){

    const reqURL = `/movie/${searchText}`;
    const response =  await fetch(reqURL);
    const jsonResponse = await response.json();
    const MoviesList = jsonResponse.results;

    let result = getElement(MoviesList);
    $('#result').html(result);
}


function getElement(MoviesList){

    let listItem = '';

    if(MoviesList.length === 0){
        listItem='<h3 style="margin-top: 25px"; >No results found ... </h3>'
        return listItem;
    }

    $.each(MoviesList, (index, movie) =>{

        if(movie.poster_path!==null && movie.overview !==""){

            listItem += 
            `   
                <div class="row">
                    <div class="col-md-2">
                        <div class="thumbnail thumbnailIndex width : 100%">
                            <div>
                            <img class="mr-3" src="http://image.tmdb.org/t/p/w154/${movie.poster_path}" >
                            </div>
                        </div>  
                    </div>
                    <div class="col-md-10">
                            <div class="well">
                                <h2 class="mt-0 mb-1">${movie.title}</h5>
                                <h4>${movie.overview}</h6>
                            </div>
                    </div>
                </div>
                <br>
            `;
        }
    })

    return listItem;  
}


