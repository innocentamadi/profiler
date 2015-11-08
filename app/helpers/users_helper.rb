module UsersHelper
  def sign_in_provider
    {
        linkedin: {name: "Linkedin", class: "blue darken-3", icon_class: "fa-linkedin"},
        github: {name: "Github", class: "red darken-4", icon_class: "fa-github"}
    }
  end
end
