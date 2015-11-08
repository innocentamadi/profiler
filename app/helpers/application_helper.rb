module ApplicationHelper
  def signin_path(provider)
    redir_path = {origin: users_path}.to_query
    "/auth/#{provider.to_s}?#{redir_path}"
  end

end
