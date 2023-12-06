// Load metodu
$("#load").load("data.txt", function (response, statusTxt, xhr) {
  if (statusTxt == "success") {
    $("#load").text(response);
  }
  if (statusTxt == "error") {
    $("#load").text(
      "Veriler yüklenirken hata oluştu: " + xhr.status + ":" + xhr.statusText
    );
  }
});

// Get metodu
$.get("https://jsonplaceholder.typicode.com/users", function (users) {
  users.forEach((user) => {
    const userInfo = `
      <li class="m-4">
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="md:flex-shrink-0">
              <img class="h-48 w-full object-cover md:w-48" src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png" alt="Profile picture">
            </div>
            <div class="p-8">
              <div class="tracking-wide text-sm text-indigo-500 font-semibold">${user.name}</div>
              <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">${user.username}</a>
              <p class="mt-2 text-gray-500">${user.email}</p>
              <p class="mt-2 text-gray-500">${user.phone}</p>
              <p class="mt-2 text-gray-500">${user.website}</p>
              <p class="mt-2 text-gray-500">${user.company.name}</p>
              <p class="mt-2 text-gray-500">${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            </div>
          </div>
        </div>
      </li>
    `;
    $("#get").append(userInfo);
  });
});

// Post metodu
$("#postForm").on("submit", function (e) {
  e.preventDefault();

  let title = $("#title").val();
  let body = $("#body").val();

  $.post("https://jsonplaceholder.typicode.com/posts", {
    title: title,
    body: body,
  })
    .done(function (data) {
      alert("Gönderiniz başarıyla oluşturuldu!");
    })
    .fail(function () {
      alert("Bir hata oluştu.");
    });
});
