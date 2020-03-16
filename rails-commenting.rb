# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1)
# Below is the controller of BlogPosts.
class BlogPostsController < ApplicationController
  def index
    # 2)
    # This is the method that shows all items in the BlogPost model.
    @posts = BlogPost.all
  end

  def show
    # 3)
    # This is the method that shows one specific item of a model. 
    @post = BlogPost.find(params[:id])
  end

  # 4)
  # The new method allows the user to create a new item in a model
  def new
  end

  def create
    # 5)
    # The create method allows a user to create a item in a model and save it. If the blog post is valid then it will redirect the user to the page with the updated model, otherwise it will redirect the user to the page to input the information again.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def delete
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 6) If the destroy method works, then redirect to the updated blog post page, otherwise, redirect to the blog post page with no deleted items. I think??
      redirect_to blog_post_path(@post)
    end
  end

  # 7)
  # Anything under "private" can only be accessed within this BlogPost class.
  private
  def blog_post_params
    # 8)
    # This allows us to find a specific param and we do so by requiring the blog_post and then permiting the title and content of that blog post.
    params.require(:blog_post).permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9)
# I believe below is the Blog Post route? 
class BlogPost < ApplicationRecord
  # 10)
  # Since Blog Post is the primary model, it "has_many" comments.
  has_many :comments
end
