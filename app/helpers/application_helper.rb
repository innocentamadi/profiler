module ApplicationHelper
  def signin_path(provider)
    redir_path = {origin: '/profile'}.to_query
    "/auth/#{provider.to_s}?#{redir_path}"
  end

end
