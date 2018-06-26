using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Linq.Expressions;

namespace IMOMaritimeSingleWindow.Repositories
{
    /// <summary>
    /// 
    /// </summary>
    /// <typeparam name="TEntity"></typeparam>
    /// <typeparam name="TKey">The type of the primary key used for the entity</typeparam>
    public interface IRepository<TEntity, TKey>
        where TEntity : class
        where TKey : IEquatable<TKey>
    {

        /// <summary>
        /// Retrieves the entities from the repository matching the given primary key value.
        /// </summary>
        TEntity Get(TKey id);


        IEnumerable<TEntity> Get(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            string includeProperties = "");
        IEnumerable<TEntity> GetAll();
        /// <summary>
        /// Retrieves the entities from the repository matching the given predicate.
        /// </summary>
        /// <param name="predicate"></param>
        IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> predicate);
        /// <summary>
        /// Retrieves a single entity from the repository matching the given predicate.
        /// </summary>
        /// <param name="predicate"></param>
        TEntity Single(Expression<Func<TEntity, bool>> predicate);

        void Add(TEntity entity);
        void AddRange(IEnumerable<TEntity> entities);

        void Remove(TEntity entity);
        void RemoveAll(IEnumerable<TEntity> entities);
        void Update(TEntity entity);

        
    }
}
