module UsersHelper
  def sign_in_provider
    {
        linkedin: {name: "Linkedin", class: "#007BB6", icon_class: "fa-linkedin"},
        github: {name: "Github", class: "#444444", icon_class: "fa-github"}
    }
  end
<<<<<<< HEAD
=======

  def unlinked_account
    has_linked_github = current_user.repos.any?
    has_linked_linkedin = current_user.basic_profile.present?
    unless has_linked_linkedin && has_linked_github
      if has_linked_linkedin
        link_github
      elsif has_linked_github
        link_linkedin
      end
    end
  end

  def link_github
    content_tag :li do
      link_to 'Connect to Github', '/auth/github'
    end
  end

  def link_linkedin
    content_tag :li do
      link_to 'Connect to LinkedIn', '/auth/linkedin'#, class: "btn btn-linkedin"
    end
  end
>>>>>>> 4e7f87c193550794535628a2c1582a79ca2410cd
end
