module UsersHelper
  def sign_in_provider
    {
        linkedin: {name: "Linkedin", class: "#007BB6", icon_class: "fa-linkedin"},
        github: {name: "Github", class: "#444444", icon_class: "fa-github"}
    }
  end
end
