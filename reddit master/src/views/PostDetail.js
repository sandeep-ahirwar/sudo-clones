import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, View, FlatList } from 'react-native'

import axios from '../utils/fetcher'
import { AuthContext } from '../context/authContext'

import Post from '../components/Post'
import CommentListItem from '../components/CommentListItem'
import CreateComment from '../components/CreateComment'
import CommentLoader from '../components/CommentLoader'
import PostLoader from '../components/PostLoader'

const PostDetail = ({ route, navigation }) => {
  const { authState } = React.useContext(AuthContext)
  const flatListRef = React.useRef()

  const [post, setPost] = React.useState(null)
  const [isLoading, setIsLoaading] = React.useState(false)
  const [comment, setComment] = React.useState('')
  const [isFocused, setIsFocused] = React.useState(null)

  const { postId } = route.params
  const { comments } = route.params

  const getPostData = React.useCallback(async () => {
    setIsLoaading(true)
    const { data } = await axios.get(`post/${postId}`)
    setPost(data)
    setIsLoaading(false)
  }, [postId])

  React.useEffect(() => {
    getPostData()
  }, [getPostData])

  React.useEffect(() => {
    isFocused && flatListRef.current.scrollToOffset({ animated: true, offset: 0 })
  }, [isFocused])

  const createComment = async () => {
    const { data } = await axios.post(`/post/${postId}`, {
      comment
    })
    setPost(data)
    setComment('')
  }

  const deleteComment = async commentId => {
    setIsLoaading(true)
    const { data } = await axios.delete(`/post/${postId}/${commentId}`)
    setPost(data)
    setIsLoaading(false)
  }

  const deletePost = async postId => {
    setIsLoaading(true)
    const { status } = await axios.delete(`post/${postId}`)
    if (status === 200) {
      navigation.push('Home')
    }
    setIsLoaading(false)
  }

  return (
    <View as={SafeAreaView} style={styles.container}>
      {post ? (
        <>
          <FlatList
            ref={flatListRef}
            data={post.comments.sort((a, b) => a.created < b.created)}
            refreshing={isLoading}
            onRefresh={() => getPostData()}
            keyExtractor={item => item.id}
            ListHeaderComponent={
              <Post
                postId={post.id}
                userId={authState.userInfo.id}
                score={post.score}
                type={post.type}
                title={post.title}
                author={post.author}
                category={post.category}
                text={post.text}
                comments={post.comments}
                created={post.created}
                url={post.url}
                votes={post.votes}
                views={post.views}
                setIsLoaading={setIsLoaading}
                setData={setPost}
                postType="item"
                deleteButton={true}
                deletePost={() => deletePost(post.id)}
              />
            }
            ListHeaderComponentStyle={styles.headerComponentStyle}
            renderItem={({ item, index }) => (
              <CommentListItem
                body={item.body}
                author={item.author}
                created={item.created}
                deleteComment={() => deleteComment(item.id)}
              />
            )}
          />
          {authState.token && (
            <CreateComment
              onPress={createComment}
              setComment={setComment}
              setIsFocused={setIsFocused}
              comment={comment}
            />
          )}
        </>
      ) : (
        <>
          <PostLoader />
          {comments.map(i => (
            <CommentLoader key={i.id} />
          ))}
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerComponentStyle: {
    marginVertical: 7
  }
})

export default PostDetail
