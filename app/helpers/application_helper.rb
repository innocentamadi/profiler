module ApplicationHelper
  def signin_path(provider)
    redir_path = {origin: users_path}.to_query
    "/auth/#{provider.to_s}?#{redir_path}"
  end
<<<<<<< HEAD
=======

>>>>>>> 4e7f87c193550794535628a2c1582a79ca2410cd
end
